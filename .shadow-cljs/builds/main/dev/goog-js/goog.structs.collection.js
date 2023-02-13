["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/collection.js"],"~:js","goog.provide(\"goog.structs.Collection\");\ngoog.structs.Collection = function() {\n};\ngoog.structs.Collection.prototype.add;\ngoog.structs.Collection.prototype.remove;\ngoog.structs.Collection.prototype.contains;\ngoog.structs.Collection.prototype.getCount;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Defines the collection interface.\n */\n\ngoog.provide('goog.structs.Collection');\n\n\n\n/**\n * An interface for a collection of values.\n * @interface\n * @template T\n */\ngoog.structs.Collection = function() {};\n\n\n/**\n * @param {T} value Value to add to the collection.\n */\ngoog.structs.Collection.prototype.add;\n\n\n/**\n * @param {T} value Value to remove from the collection.\n */\ngoog.structs.Collection.prototype.remove;\n\n\n/**\n * @param {T} value Value to find in the collection.\n * @return {boolean} Whether the collection contains the specified value.\n */\ngoog.structs.Collection.prototype.contains;\n\n\n/**\n * @return {number} The number of values stored in the collection.\n */\ngoog.structs.Collection.prototype.getCount;\n","~:compiled-at",1676259819970,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.collection.js\",\n\"lineCount\":8,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,yBAAb,CAAA;AASAD,IAAKE,CAAAA,OAAQC,CAAAA,UAAb,GAA0BC,QAAQ,EAAG;CAArC;AAMAJ,IAAKE,CAAAA,OAAQC,CAAAA,UAAWE,CAAAA,SAAUC,CAAAA,GAAlC;AAMAN,IAAKE,CAAAA,OAAQC,CAAAA,UAAWE,CAAAA,SAAUE,CAAAA,MAAlC;AAOAP,IAAKE,CAAAA,OAAQC,CAAAA,UAAWE,CAAAA,SAAUG,CAAAA,QAAlC;AAMAR,IAAKE,CAAAA,OAAQC,CAAAA,UAAWE,CAAAA,SAAUI,CAAAA,QAAlC;;\",\n\"sources\":[\"goog/structs/collection.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Defines the collection interface.\\n */\\n\\ngoog.provide('goog.structs.Collection');\\n\\n\\n\\n/**\\n * An interface for a collection of values.\\n * @interface\\n * @template T\\n */\\ngoog.structs.Collection = function() {};\\n\\n\\n/**\\n * @param {T} value Value to add to the collection.\\n */\\ngoog.structs.Collection.prototype.add;\\n\\n\\n/**\\n * @param {T} value Value to remove from the collection.\\n */\\ngoog.structs.Collection.prototype.remove;\\n\\n\\n/**\\n * @param {T} value Value to find in the collection.\\n * @return {boolean} Whether the collection contains the specified value.\\n */\\ngoog.structs.Collection.prototype.contains;\\n\\n\\n/**\\n * @return {number} The number of values stored in the collection.\\n */\\ngoog.structs.Collection.prototype.getCount;\\n\"],\n\"names\":[\"goog\",\"provide\",\"structs\",\"Collection\",\"goog.structs.Collection\",\"prototype\",\"add\",\"remove\",\"contains\",\"getCount\"]\n}\n"]