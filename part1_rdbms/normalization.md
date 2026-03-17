## Anomaly Analysis

### Update Anomaly
**Columns affected:** `sales_rep_id`, `sales_rep_name`, `sales_rep_email`, `office_address`  
**Rows affected:** Example rows include Row 3 (ORD1114), Row 39 (ORD1180), and many other rows for `sales_rep_id = SR01`.

The office address of the sales representative is repeated in every order row.  
For example, sales representative SR01 appears in more than 80 rows.  
When the address was partially updated, some rows still contained  
"Mumbai HQ, Nariman Point, Mumbai - 400021" while others were changed to  
"Mumbai HQ, Nariman Pt, Mumbai - 400021".  

Because the information is duplicated across many rows, updating the address requires modifying many records. If even one row is missed, inconsistent data appears in the dataset.

---

### Delete Anomaly
**Columns affected:** `product_id`, `product_name`, `category`, `unit_price`  
**Row affected:** Row 13 (Order ID: ORD1185)

Product **P008 (Webcam, Electronics, ₹2100)** appears in only one order row.  
If this order is deleted (for example, because it was cancelled or archived), the entire product record would also be deleted.  

Since there is no separate `products` table, deleting the order would permanently remove all information about this product.

---

### Insert Anomaly
**Columns affected:** `sales_rep_id`, `sales_rep_name`, `sales_rep_email`, `office_address`

Currently the dataset contains three sales representatives:  
SR01 (Deepak Joshi), SR02 (Anita Desai), and SR03 (Ravi Kumar).

If the company hires a new sales representative, for example  
SR04 (Priya Kapoor), it cannot be inserted into the dataset without creating a fake order row.

This happens because there is no separate `sales_reps` table and all sales representative information is tied to order records.


## Normalization Justification

At first glance, keeping everything in one flat table may look simpler, but in real-world scenarios it creates serious data issues. The orders_flat.csv dataset clearly demonstrates these problems.

For example, the office address of sales representative Deepak Joshi (SR01) is repeated multiple times — once for every order. In the dataset, this value appears in more than 80 rows. When the address was updated, some rows still contained "Nariman Point" while others were changed to "Nariman Pt." This resulted in inconsistent data, and it becomes difficult to identify which value is correct. This is a direct example of an update anomaly.

A delete anomaly is also visible. Product P008 (Webcam, ₹2100) appears in only one order (ORD1185). If this order is deleted, all information about that product is lost. This shows that important data should not depend on transactional records.

Similarly, the insert anomaly highlights another issue. New sales representatives, such as SR04 and SR05, cannot be added without creating a dummy order in a flat table. This leads to incorrect and misleading data.

Normalization solves these problems by separating data into multiple related tables. While it introduces joins in queries, it ensures data consistency, prevents redundancy, and avoids data loss. Therefore, normalization is not over-engineering but a necessary step for maintaining reliable and scalable systems.
