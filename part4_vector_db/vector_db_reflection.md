## Vector DB Use Case

A traditional keyword-based search is not suitable for a law firm that needs to
search large contracts using plain English questions.

Keyword search depends on exact word matching. For example, if a lawyer searches
for "termination clauses", the system will only look for the exact word
"termination". However, legal documents often use different terms for the same
meaning, such as "contract cancellation", "agreement ending", or "exit terms".
Because of this, keyword search may miss important information and give incomplete
results.

A vector database solves this problem by focusing on meaning instead of exact
words. It converts both the query and the document text into embeddings, which
are numerical representations of their meaning. The system then compares these
embeddings and finds the most similar results.

For instance, if a lawyer asks "Can either party leave the agreement early?",
the system can still return relevant clauses about termination or cancellation,
even if the word "leave" is not used in the document. This is similar to what we
observed in our notebook, where a cricket-related query matched cricket sentences
based on meaning.

In this setup, the vector database stores embeddings of all document sections and
performs fast similarity searches. This makes it more accurate and efficient than
traditional keyword-based search for handling large and complex legal documents.
Therefore, for a law firm dealing with complex contracts, a vector database is not optional — it is the only practical solution for semantic search at scale.

