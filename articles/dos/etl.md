---
uid: etl.md
title: Metadata-Driven ETL Engine
---

# Metadata-Driven ETL Engine

## In Health Catalyst's View, Metadata Is King.
Many enterprise data warehousing ETL models contain no metadata, relying mostly on manual processes to bring data into their EDW. Over many years of updates and code changes – without structure and standards in place – maintenance costs become burdensome and reports are bottlenecked by the time-consuming work required to massage data into new formats.

## Automated, Metadata-driven ETL
Rather than a data analyst maintaining hundreds of ETL scripts and performing each extraction, the Health Catalyst Analytics Platform deploys Source Mart Designer to map source system tables and columns to their Source Mart counterparts entirely with metadata.

Mappings are then used to create one or more ETL tasks for each source system table, automating extractions of data from the source systems. Users define how often they want the underlying data to refresh – up to as often as every 10–15 minutes.

### Near-Real-Time Data
Metadata-driven ETL offers analysts:

* The ability to execute potentially hundreds of ETL processes each night
* Reports that rebuild each time metadata is updated

### Agile, Flexible, and Scalable
Initially, the ETL process does little or no transformation of the source data beyond mapping source system data types to destination system data types. That means that rather than developing the entire data model up front before knowing what all the use cases for the data will be, data is bound late in the process – just in time to solve an actual clinical or business problem.

The flexibility of late binding is a benefit James Dixon also promotes in his concept of a data lake architecture, which preserves data in its unstructured form so it can answer new questions that arise down the road.

[Process for building the data flow](media/Process-for-building-the-data-flow.png)