(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{600:function(e,a,t){"use strict";t.r(a);var i=t(10),s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"planning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning"}},[e._v("#")]),e._v(" Planning")]),e._v(" "),t("WrappedSection",[t("p",[e._v("Before running a database in production, it is important to plan:")]),e._v(" "),t("ul",[t("li",[e._v("Computing resources")]),e._v(" "),t("li",[e._v("Disk space")]),e._v(" "),t("li",[e._v("Configuration")]),e._v(" "),t("li",[e._v("Backups")]),e._v(" "),t("li",[e._v("Health Monitoring")])])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"computing-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computing-resources"}},[e._v("#")]),e._v(" Computing Resources")]),e._v(" "),t("p",[e._v("immudb was designed to have a stable memory/CPU footprint.")]),e._v(" "),t("p",[e._v("Memory is pre-allocated based on specified maximum concurrency, maximum number of entries per transaction, cache sizes, etc.")]),e._v(" "),t("p",[e._v("With the default settings, it's possible to stress immudb and memory usage should stay around 1.5GB (assuming low-sized values). Otherwise, memory will be needed to maintain the values within a transaction during commit time.")])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"disk-space-and-data-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-space-and-data-location"}},[e._v("#")]),e._v(" Disk space and data location")]),e._v(" "),t("p",[e._v("immudb is an immutable database, this means all history is preserved and therefore disk usage is higher than a normal database.")]),e._v(" "),t("p",[e._v("Data is stored in the directory specified by the "),t("code",[e._v("dir")]),e._v(" option.")])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);