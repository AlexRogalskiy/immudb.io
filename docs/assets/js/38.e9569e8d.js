(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{318:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"default-docker-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-docker-integration"}},[e._v("#")]),e._v(" Default Docker Integration")]),e._v(" "),a("p",[a("code",[e._v("vcn")]),e._v(" supports local docker installations out of the box using "),a("code",[e._v("docker://")]),e._v(" as a location. You just need to point to the correct container image name or the container image id.")]),e._v(" "),a("p",[e._v("If you prefer "),a("a",{attrs:{href:"https://podman.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("podman"),a("OutboundLink")],1),e._v(", just use "),a("code",[e._v("podman://")]),e._v(" instead.")]),e._v(" "),a("h3",{attrs:{id:"notarize-a-local-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notarize-a-local-docker-image"}},[e._v("#")]),e._v(" Notarize a local docker image")]),e._v(" "),a("p",[a("code",[e._v("vcn")]),e._v(" uses docker default schemes, so the latest tag is automatically used, if no tag is given")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vcn notarize docker://hello-world\n")])])]),a("p",[e._v("or using a tag")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vcn notarize docker://hello-world:v1\n")])])]),a("p",[e._v("To be able to notarize, you need to register at "),a("a",{attrs:{href:"https://dashboard.codenotary.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary"),a("OutboundLink")],1),e._v(" and get an account.")]),e._v(" "),a("h3",{attrs:{id:"authenticate-a-local-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-a-local-docker-image"}},[e._v("#")]),e._v(" Authenticate a local docker image")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vcn authenticate docker://hello-world\n")])])]),a("p",[e._v("or using a tag")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vcn authenticate docker://hello-world:v1\n")])])]),a("h1",{attrs:{id:"docker-sidecar-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-sidecar-integration"}},[e._v("#")]),e._v(" Docker Sidecar Integration")]),e._v(" "),a("p",[a("code",[e._v("vcn")]),e._v(" also offers a sidecar project, you can use to automatically authenticate used container images during runtime.")]),e._v(" "),a("p",[e._v("Check out (https://github.com/vchain-us/vcn-watchdog) on your server. The tool continuously verifies the integrity of your containers:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/vchain-us/vcn-watchdog.git \n")])])]),a("p",[e._v("Edit the verify file and set the alerting/monitoring tool you are using (see the following instructions), if you want to change the alerting")]),e._v(" "),a("p",[e._v("Make sure "),a("code",[e._v("/var/run/docker.sock")]),e._v(" is accessible and run the following command on your server within the "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn-watchdog.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("vcn-watchdog"),a("OutboundLink")],1),e._v(" directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose build && docker-compose up \n")])])]),a("p",[e._v("To modify the verify file, hook up your alerting tool into the err() function.")]),e._v(" "),a("p",[e._v("Example using Slack, do the following:")]),e._v(" "),a("ul",[a("li",[e._v("Create a Slack Bot (Slack documentation here)")]),e._v(" "),a("li",[e._v("Use the following code:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function err() {\n    echo "Container ${1} (${2}) verification failed" >&2\n    curl -q -X POST \\\n        -H \'Content-type: application/json\' \\\n        --data "{\\"text\\":\\"Container ${1} (${2}) verification failed\\"}" \\\n        "https://hooks.slack.com/services/$TOKEN/$KEY" > /dev/null 2>&1} \n')])])]),a("p",[e._v("If all works well, you should receive slack messages in your slack channel")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.vchain.us/wp-content/uploads/2019/04/002_Alerting-on-Slack-example-768x129.png",alt:"Slack alert based on vcn verify",title:"Slack alert based on vcn verify"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);