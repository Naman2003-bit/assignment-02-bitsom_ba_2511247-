## ETL Decisions

### Decision 1 — Standardizing Date Formats
Problem: The raw data contained dates in three different formats: DD/MM/YYYY (105 rows),
DD-MM-YYYY (83 rows), and YYYY-MM-DD (112 rows). Storing these inconsistent formats
directly would cause incorrect sorting and failed date comparisons in analytical queries.

Resolution: All dates were converted to a single standard format YYYY-MM-DD before
loading into dim_date. A date_key in YYYYMMDD format (e.g., 20230829) was also created
as the primary key for fast joining between fact_sales and dim_date.

### Decision 2 — Fixing Inconsistent Category Casing
Problem: The category column had multiple inconsistent values for the same category:
"Electronics" and "electronics" were treated as different values, and "Grocery" and
"Groceries" referred to the same category. This would cause incorrect grouping in
revenue reports.

Resolution: All category values were standardized to title case with consistent naming:
"electronics" became "Electronics", and "Grocery" became "Groceries". This
standardization was applied before loading into dim_product.

### Decision 3 — Filling NULL Store City Values
Problem: 19 rows in the dataset had a blank store_city field. Since store_city is used
in store-level analysis, leaving it NULL would cause incomplete results in queries
filtering or grouping by city.

Resolution: Since store_name was always present and each store has a fixed city, the
missing city values were filled using a store-to-city mapping from the non-null rows.
For example, all rows with store_name "Mumbai Central" were assigned store_city "Mumbai".