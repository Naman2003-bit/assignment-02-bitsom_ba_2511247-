## Architecture Recommendation

A fast-growing food delivery startup that collects GPS data, customer reviews,
payment transactions, and restaurant menu images should adopt a Data Lakehouse
architecture.

A traditional Data Warehouse is not suitable in this case because it is designed
for structured data with fixed schemas. However, the startup deals with different
types of data such as text reviews, GPS logs, and image data, which cannot be
efficiently stored in rigid table structures. On the other hand, a pure Data Lake
can store all types of data but does not provide strong support for querying,
data governance, and analytics.

A Data Lakehouse combines the advantages of both systems.

First, the startup handles multiple data formats. Payment data is structured,
reviews are unstructured text, GPS logs are semi-structured, and menu images are
unstructured image data. A Lakehouse allows all these formats to be stored in a
single system without enforcing a strict schema.

Second, the system needs to support both real-time and analytical workloads.
GPS data is continuously generated and requires fast ingestion, while business
teams need to analyze order and payment data for reports and trends. A Lakehouse
can handle both streaming and batch processing efficiently.

Third, as the business grows, data volume will increase significantly. A Lakehouse
uses scalable cloud storage, making it more cost-efficient compared to traditional
data warehouses that scale compute and storage together.

Therefore, a Data Lakehouse is the most suitable and scalable architecture for
handling diverse data types and supporting future growth.
