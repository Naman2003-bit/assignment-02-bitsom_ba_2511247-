## Storage Systems

The architecture uses multiple storage systems, each selected based on the specific requirement of the use case.

A Data Warehouse (Snowflake / BigQuery) is used for Goals 1 and 3. It is designed for analytical workloads and can efficiently process large volumes of historical patient data. This makes it suitable for training machine learning models for readmission prediction and generating monthly management reports such as bed occupancy and department-wise costs.

PostgreSQL is used as the OLTP system for Goal 2. It stores structured patient records and supports reliable, ACID-compliant transactions. When a doctor asks a question in plain English, it is converted into SQL and executed on PostgreSQL for accurate and real-time results.

A Vector Database (Pinecone / pgvector) is also used for Goal 2 to handle unstructured data such as patient notes and discharge summaries. By storing embeddings, it enables semantic search and retrieves relevant results even when the exact words do not match.

A Time-Series Database (InfluxDB / TimescaleDB) is used for Goal 4 to handle real-time ICU data. It is optimized for high-frequency data writes and supports time-based queries efficiently.

## OLTP vs OLAP Boundary

In this design, PostgreSQL acts as the OLTP system. It handles real-time transactions such as updating patient records and processing doctor queries. These operations require consistency, speed, and reliability.

The Data Warehouse serves as the OLAP system, where large-scale analytical queries are performed. Data is transferred from operational systems to the warehouse through a batch ETL pipeline. This separation ensures that heavy analytical queries do not impact the performance of transactional systems.

The ETL pipeline acts as a bridge between OLTP and OLAP, moving cleaned and structured data into the warehouse for analysis.

## Trade-offs

The main trade-off in this architecture is between data freshness and system simplicity. Since data is loaded into the warehouse through a nightly batch process, there can be a delay of up to 24 hours. This may affect the accuracy of near real-time predictions.

To address this, a change data capture (CDC) approach or micro-batch processing can be introduced. These methods reduce the delay and improve data freshness without significantly increasing system complexity.

This ensures a balance between system simplicity and data freshness as the system evolves.
