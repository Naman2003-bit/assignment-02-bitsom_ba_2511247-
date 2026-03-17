USE retail_dw;

-- ============================================================
-- dw_queries.sql
-- Part 3: Data Warehouse — Analytical Queries (Q1 to Q3)
-- Database: retail_dw
-- ============================================================


-- Q1: Total sales revenue by product category for each month
SELECT
    d.year,
    d.month,
    d.month_name,
    p.category,
    SUM(f.total_revenue) AS total_revenue
FROM fact_sales f
JOIN dim_date    d ON f.date_key    = d.date_key
JOIN dim_product p ON f.product_id  = p.product_id
GROUP BY d.year, d.month, d.month_name, p.category
ORDER BY d.year, d.month, p.category;


-- Q2: Top 2 performing stores by total revenue
SELECT
    s.store_id,
    s.store_name,
    s.store_city,
    SUM(f.total_revenue) AS total_revenue,
    SUM(f.units_sold)    AS total_units_sold
FROM fact_sales f
JOIN dim_store s ON f.store_id = s.store_id
GROUP BY s.store_id, s.store_name, s.store_city
ORDER BY total_revenue DESC
LIMIT 2;


-- Q3: Month-over-month sales trend across all stores
WITH monthly_sales AS (
    SELECT
        d.year,
        d.month,
        d.month_name,
        SUM(f.total_revenue) AS monthly_revenue
    FROM fact_sales f
    JOIN dim_date d ON f.date_key = d.date_key
    GROUP BY d.year, d.month, d.month_name
)

SELECT
    year,
    month,
    month_name,
    monthly_revenue,
    LAG(monthly_revenue) OVER (ORDER BY year, month) AS prev_month_revenue,
    ROUND(
        (monthly_revenue - LAG(monthly_revenue) OVER (ORDER BY year, month))
        / LAG(monthly_revenue) OVER (ORDER BY year, month) * 100,
        2
    ) AS mom_growth_percent
FROM monthly_sales
ORDER BY year, month;
