(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{572:function(e,t,a){"use strict";a.r(t);var i=a(10),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"immudb-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immudb-explained"}},[e._v("#")]),e._v(" immudb explained")]),e._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"what-is-immudb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-immudb"}},[e._v("#")]),e._v(" What is immudb?")]),e._v(" "),a("p",[e._v("immudb is database with built-in cryptographic proof and verification. It can track changes in sensitive data and the integrity of the history will be protected by the clients, without the need to trust the server.")]),e._v(" "),a("p",[e._v("immudb can operate both as a key-value or relational (SQL) database. You can add new transactions, but deletion or modification of older transactions isn’t allowed, thus making your data immutable. When a key record's value changes over time (such as a bank balance), you can get multiple instances with different timestamps to give you the complete history of that record's changes. You can store a variety of common data types, verification checksums, or JSON.")])]),e._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"what-makes-immudb-special"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-makes-immudb-special"}},[e._v("#")]),e._v(" What makes immudb special?")]),e._v(" "),a("FeatureTable"),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Keep track of changes and audit them.")]),e._v(" Traditional database transactions and logs are hard to scale and are mutable, so there is no way to know for sure if your data has been compromised. immudb is immutable. You can add new versions of existing records, but never change or delete records. This lets you store critical data without fear of it being changed silently.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Verify your data without sacrificing performance.")]),e._v(" Data stored in immudb is cryptographically coherent and verifiable, just like blockchains, but without all the complexity. Unlike blockchains, immudb can handle millions of transactions per second, and can be used both as a lightweight service or embedded in your application as a library.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Protect yourself from supply-chain attacks.")]),e._v(" While Cyber Security is an important part of your organization’s business plan, immudb provides another layer of security to ensure data integrity even in the event your perimeter is breached during an attack. Data cannot be deleted or modified once stored into immudb. Additions of new data are logged and auditable, enabling you to view any suspect additions made during the intrusion.")])])])],1),e._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"how-can-i-use-immudb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-use-immudb"}},[e._v("#")]),e._v(" How can I use immudb?")]),e._v(" "),a("p",[e._v("Depending on your use case, immudb might function as your application's primary or as a secondary database. As a secondary, complimentary database, use immudb to cross-check the integrity of your important data (by verifying checksums or comparing stored data values). A secondary database enables you to quickly use immudb without completely re-engineering your existing application.")]),e._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Integration with your DevOps ensures code security throughout the development and deployment process. Embed immudb into your "),a("a",{attrs:{href:"https://codenotary.io/blog/securing-your-azure-devops-ecosystem-jenkins-and-kubernetes-aks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps"),a("OutboundLink")],1),e._v(" with Jenkins and Kubernetes. Use just "),a("a",{attrs:{href:"https://codenotary.io/blog/jenkins-build-deployment-pipeline-a-how-to-for-ensuring-integrity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins"),a("OutboundLink")],1),e._v(". Alternatively, integrate with "),a("a",{attrs:{href:"https://codenotary.io/blog/fully-trusted-gitlab-pipeline/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLab"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://codenotary.io/blog/use-github-actions-for-validated-builds/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Guarantee "),a("a",{attrs:{href:"https://codenotary.io/blog/file-integrity-monitoring-change-management/",target:"_blank",rel:"noopener noreferrer"}},[e._v("File Integrity"),a("OutboundLink")],1),e._v(" of your critical data. Examples include storing your organization's sensitive financial, credit card transactional, invoices, contracts, educational transcripts, and other important data.")])]),e._v(" "),a("li",[a("p",[e._v("Ensure integrity of your legal "),a("a",{attrs:{href:"https://codenotary.io/blog/immutably-store-or-guarantee-the-immutability-of-documents-and-invoices-for-compliance-reasons/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documents and Invoices"),a("OutboundLink")],1),e._v(", contracts, forms, and your downloads and emails.")])]),e._v(" "),a("li",[a("p",[e._v("Save your Internet of Things (IoT) sensor data as a failsafe plan for loss of data.")])]),e._v(" "),a("li",[a("p",[e._v("Keep your investment guidelines or stock market data tamperproof for your investment bank or client financial portfolios.")])]),e._v(" "),a("li",[a("p",[e._v("Store important log files to keep them tamperproof to meet regulations like PCI compliance.")])]),e._v(" "),a("li",[a("p",[e._v("Protect medical data, test results, or recipes from alteration.")])]),e._v(" "),a("li",[a("p",[e._v("Companies use immudb to protect credit card transactions and to secure processes by storing digital certificates and checksums.")])])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);