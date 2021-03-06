/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),a=0;for(n=0;n<e;n++)for(var u=arguments[n],i=0,o=u.length;i<o;i++,a++)r[a]=u[i];return r}var n=function(t,n){return void 0===n&&(n=1),new RegExp("^(?!.*("+t+").*\\1{"+n+",}).+$","i")},e=function(t){return new RegExp("^[^<>/\\\\\\|:''\\*\\?]+\\.("+t+")+$","i")},r=function(t,n){void 0===n&&(n="");var e="^("+t+"):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?";return""!==n&&(e=e+".("+n+")+"),e+="$",new RegExp(e,"i")},a={required:/.+/,english:/^[A-Za-z]+$/,alphanum:/^[a-zA-Z0-9]+$/,chinese:/^[\u2E80-\uFE4F]+$/,upper:/[A-Z]/,lower:/[a-z]/,hasLetter:/[A-Za-z]/,hasDigit:/\d/,hasSpec:/[!@#$%^&*?\(\)]/,nospace:/^\S+$/,nodbc:/^[^\uFF01-\uFF60\uFF0A-\uFF5F\u3000-\u3003]+$/,norepeat:n("."),nospec:/^[^><,\[\]\{\}\?\/\+=\|\'\\\':;\~\!\@\#\*\$\%\^\&\(\)`]+$/,qq:/^[1-9]\d{4,10}$/,age:/^(0|[1-9]\d?|1[0-2]\d)$/,zipcode:/^(\d[1-7]|[1-9][0-7])\d{4}$/,ip:/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,ipv6:/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,port:/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,domain:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/i,bizcode:/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,invoice:/^(((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12]))\d{5}[1-9][1-7][0-4])$/,bankcard:/^[1-9]\d{9,29}$/,pbcard:/^(10|30|35|37|4\d||5[0-6]|58|60|62|6[8-9]|84|8[7-8]|9[0-2]|9[4-6]|9[8-9])\d{14,17}$/,ticker:/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,passport:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,score:/^150$|^(\d|[1-9]\d|1[0-4]\d)(.5)?$/,currency:/(^-?[1-9]\d{0,2}($|(\,\d{3})*($|(\.\d{1,2}$))))|((^0(\.\d{1,2})?)|(^-0\.\d{1,2}))$/,float:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/,positivefloat:/^(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/,integer:/^-?\d+$/,positiveint:/^\d+$/,decimal:/^-?\d+\.\d+$/,percent:/^-?\d+(\.\d+)?%$/,even:/^[02468]|[1-9]\d*[02468]$/,odd:/^[13579]|[1-9]\d*[13579]$/,email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:r("https?|ftp|wss?"),ftp:r("ftp"),http:r("https?"),ws:r("wss?"),account:/^[A-Za-z]+[\w\-_]*[A-Za-z0-9]+$/,password:/^(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/,hex:/^[0-9A-F]+$/i,color:/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,ascii:/^[\u0000-\u007F]+$/,base64:/^([A-Z0-9+\/]{4})*([A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i,md5:/^(([0-9A-F]{16})|([0-9A-F]{32}))$/i,uuid:/^[0-9A-F]{8}(-?)[0-9A-F]{4}\1[0-9A-F]{4}\1[0-9A-F]{4}\1[0-9A-F]{12}$/i,mobile:/^((\+86)|(86))?(13\d|(14[5-7])|(15([0-3]|[5-9]))|166|17(0|1|8])|18\d|19(8|9))\d{8}$/,telphone:/^[+]{0,1}\d{1,3}[ ]?([-]?(\d|[ ]){1,12})+$/,phone:/^((\+86)|(86))?((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,year:/^(19|20)\d{2}$/,month:/^(0?[1-9]|1[0-2])$/,day:/^(([1-9])|([1-2]\d)|(3[0-1]))$/,hour:/^((1?\d)|(2[0-3]))$/,minute:/^[1-5]?\d$/,hmt:/^(\d|[01]\d|2[0-3]):[0-5]\d$/,time:/^(\d|([01]\d|2[0-3])):([0-5]\d):([0-5]\d)$/,date:/^((((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13578]|1[02])\5(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13456789]|1[012])\11(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)0?2\17(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))(-|\/)0?2\25(29)))$/,datetime:/^((((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13578]|1[02])\5(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13456789]|1[012])\11(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)0?2\17(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))(-|\/)0?2\25(29)))\s+(\d|([0-1]\d|2[0-3])):(\d|([0-5]?\d)):(\d|([0-5]?\d))$/,idcard:/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}(((19|20)\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((19|20)\d{2}(0[13578]|1[02])31)|((19|20)\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/,autocard:/^(([\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9\u6302\u5B66\u8B66\u6E2F\u6FB3\u4F7F\u9886]))$/,longitude:/^(\-|\+)?(0?\d{1,2}\.\d{1,15}|1[0-7]?\d{1}\.\d{1,15}|180\.0{1,15})$/,latitude:/^(\-|\+)?([0-8]?\d{1}\.\d{1,15}|90\.0{1,15})$/,londms:/^(\-|\+)?(0?\d{1,2}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|1[0-7]?\d{1}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|180\u00B000\u203200\u2033)$/,latdms:/^(\-|\+)?([0-8]?\d{1}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|90\u00B000\u203200\u2033)$/,approval:/^([\u2E80-\uFE4F]+)\u5B57(\u3014|\[)(19|20)\d{2}(\u3015|\])\u7B2C?\d{1,}\u53F7$/,citycode:/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12]))\d{4}$/,address:/^[\u2E80-\uFE4F]+(\u5E02|\u53BF|\u533A|\u65D7|\u4E61|\u9547|\u8857\u9053|\u5DDE)\S{3,}$/,isbn:/^(978\-\d\-\d{3}\-\d{5}\-[a-z0-9]$)|(978\d{9}[a-z0-9])$/i,tag:/^<([a-z1-6]+)([^<]+)*(>(.*)<\/\1>| *\/>)$/,jwt:/^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/,mac:/^[0-9A-F]{2}(\-|\:)[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}$/i,mask:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,thunder:/^thunder:\/\/[a-zA-Z0-9]+=$/,ed2k:/^ed2k:\/\/|file|.+|\/$/,magnet:/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,path:/^[a-zA-Z]:\\([^<>/\\\|:''\*\?]+\\?)+$/,file:/^[^<>/\\\|:''\*\?]+\.\w+$/,linuxfile:/^[^+-./\t\b@#$%*()\[\]][^/\t\b@#$%*()\[\]]{1,254}$/,imgurl:r("https?","gif|png|jpg|jpeg|webp|svg"),doc:e("pdf|txt|rtf|wps|doc|docx|xls|xlsx|ppt|pptx")},u=function(t){return"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)},i=function(t){return"number"==typeof t?String(t):t},o=function(t){return"string"==typeof t?+t:t};function d(t,n){return"number"!=typeof t&&"string"!=typeof t||"number"!=typeof n&&"string"!=typeof n?Array.isArray(t)?t.indexOf(n)>-1:!(!u(t)||"string"!=typeof n)&&Object.keys(t).indexOf(n)>-1:String(t).indexOf(String(n))>-1}var s={object:u,boolean:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},array:function(t){return Array.isArray(t)},func:function(t){return"function"==typeof t},datetype:function(t){return t instanceof Date},enum:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[n].concat(e).indexOf(t)>-1},norepeats:function(t,e,r){return void 0===r&&(r=1),n(e,r).test(t)},ext:function(t,n){return e(n).test(t)},idcardvalid:function(t){for(var n=String(t),e=n.toUpperCase().split(""),r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],u=a.idcard,i=0,o=0;o<17;o++)i+=parseInt(e[o],10)*r[o];return u.test(n)&&[1,0,"X",9,8,7,6,5,4,3,2][i%11]==e[17]},not:function(t,n){return t!=n},eq:function(t,n){return t==n},gt:function(t,n){return+t>+n},gte:function(t,n){return+t>=+n},lt:function(t,n){return+t<+n},lte:function(t,n){return+t<=+n},between:function(t,n,e){return+t>+n&&+t<+e},len:function(t,n){return i(t).length===o(n)},min:function(t,n){return i(t).length>=o(n)},max:function(t,n){return i(t).length<=o(n)},minof:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return+t===Math.min.apply(Math,[n].concat(e).map((function(t){return+t})))},maxof:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return+t===Math.max.apply(Math,[n].concat(e).map((function(t){return+t})))},charlen:function(t,n){for(var e=i(t),r=o(n),a=e.length,u=0,d=-1,s=0;s<a;s++)u+=(d=e.charCodeAt(s))>=0&&d<=128?1:2;return u<=r},empty:function(t){return!t||(t.length?0===t.length:!!u(t)&&0===Object.keys(t).length)},regexp:function(t,n){return n.test(t)},and:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[t,n].concat(e).every((function(t){return!!t}))},an:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return 1===[t,n].concat(e).filter((function(t){return!!t})).length},or:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[t,n].concat(e).filter((function(t){return!!t})).length>0},has:function(t,n){return d(t,n)},in:function(t,n){return d(n,t)}},c=function(t){a.hasOwnProperty(t)&&(s[t]=function(n){return"number"==typeof n&&(n=String(n)),a[t].test(n)})};for(var f in a)c(f);var p=["后者"],h={default:"%a未通过验证！",required:"%a不能为空！",english:"%a必须是英文字母！",alphanum:"%a必须是字母与数字混合！",chinese:"%a必须是中文！",upper:"%a必须要有大写！",lower:"%a必须要有小写！",hasLetter:"%a必须要有字母！",hasDigit:"%a必须要有数字！",hasSpec:"%a必须要有特殊字符！",nospace:"%a不得含任何空格字符！",nodbc:"%a不得含任何全角字符！",norepeat:"%a不得有任何字符重复！",nospec:"%a不得含SQL敏感字符！",qq:"%a必须是首位不为0的5~11位的数字！",age:"%a必须是0~129的年龄数字！",zipcode:"%a邮编格式不对！",ip:"%aIPV4地址格式不对！",ipv6:"%aIPV6地址格式不对！",port:"%a端口格式不对！",domain:"%a域名格式不对！",bizcode:"%a统一信用编码格式不对！",invoice:"%a增值税号格式有误！",bankcard:"%a银行卡号格式有误！",pbcard:"%a个人银行卡号格式有误！",ticker:"%a股票代号格式有误！",passport:"%a护照号格式有误！",score:"%a分数格式有误！",currency:"%a货币格式有误！",float:"%a必须是浮点数！",positivefloat:"%a必须是正浮点数！",integer:"%a必须是整数！",positiveint:"%a必须是正整数！",decimal:"%a必须是小数！",percent:"%a必须是百分数！",even:"%a必须是偶数！",odd:"%a必须是奇数！",email:"%a邮箱格式不对！",url:"%a网址格式有误！",ftp:"%aFtp地址格式有误！",http:"%aHttp地址格式有误！",ws:"%aWebsocket址格式有误！",account:"%a必须是字母与_数字的组合，且首位为字母！",password:"%a最少包含1个大小写字母、特殊字符、数字！",hex:"%aHAX格式有误！",color:"%a颜色值格式有误！",ascii:"%aASCII格式有误！",base64:"%aBASE64格式有误！",md5:"%aMD5格式有误！",uuid:"%aUUID或GUID格式有误！",mobile:"%a手机号码格式不对！",telphone:"%a电话号码格式不对！",phone:"%a手机或电话号码格式不对！",year:"%a必须是四位年份数字！",month:"%a必须是1~12月份数字！",day:"%a必须是1~31日的数字！",hour:"%a必须是0~23小时数字！",minute:"%a必须是0~59分秒数字！",hmt:"%a时分的格式不对！",time:"%a时分秒的时间格式不对！",date:"%a日期格式不对！",datetime:"%a日期与时间格式不对！",idcard:"%a必须是合法身份证号格式！",autocard:"%a必须是合法车牌号格式！",longitude:"%a必须符合经度格式，带1位以上小数点！",latitude:"%a必须符合纬度格式，带1位以上小数点！",londms:"%a必须是度分秒格式的经度！",latdms:"%a必须是度分秒格式的纬度！",approval:"%a必须是审批文号格式！",citycode:"%a必须是6位地区代码！",address:"%a必须是带镇与街道的地址！",isbn:"%a必须是13位书号格式！",tag:"%a必须是闭合标签格式！",jwt:"%a必须是JWT字符串格式！",mac:"%a必须是MAC地址格式！",mask:"%a子网掩码格式不正确！",path:"%a必须是合法路径！",file:"%a必须是合法文件名！",linuxfile:"%a需为推荐的linux文件名！",imgurl:"%a必须是合法图片文件名！",doc:"%a必须是合法文档文件名！",object:"%a必须是对象类型！",string:"%a必须是字符串类型！",number:"%a必须是数字类型！",boolean:"%a必须是布尔类型！",func:"%a必须是函数类型！",datetype:"%a日期格式不对！",enum:"%a必须是枚举类型！",array:"%a必须是数组类型！",not:"%a不能等于%1！",eq:"%a必须等于%1！",gt:"%a要大于%1！",gte:"%a要大于等于%1！",lt:"%a要小于%1！",lte:"%a要小于等于%1！",between:"%a要大于%1，小于%2！",minof:"%a必须是在%t最小的值！",maxof:"%a必须是在%t最大的值！",len:"%a长度要等于%1！",min:"%a最小长度应为%1！",max:"%a最大长度应为%1！",charlen:"%a最大字节长度应为%1！",in:"%a不在%t范围之内！",has:"%a不存在%t！",empty:"%a必须是空的值！",regexp:"%a没有匹配正确！",and:"%a和%t都不能为空！",an:"%a和%t只能有一项不为空！",or:"%a和%t至少一项或以上不能为空！"},l=Object.create(null),g=function(){function t(){this.__types=[],this.__handler=[],this.__customs=[],this.__names=[],this.isAsync=!1}return t.prototype.struct=function(t){return this.__substruct=t,this},t.prototype.apply=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return s.func(t)&&this.__customs.push([0,t,n]),this},t.prototype.async=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return s.func(t)&&this.__customs.push([1,t,n]),this.isAsync=!0,this},t.prototype.error=function(t){return s.func(t)&&(this.__handler[0]=t),this},t.prototype.ok=function(t){return s.func(t)&&(this.__handler[1]=t),this},t.prototype.alias=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=this.__names[0],a=this.__names[1];return r?r&&!a?this.__names[1]=[t]:r&&a&&a.push(t):this.__names[0]=t,n.length>0&&(this.__names[1]=a?a.concat(n):n),this},t.prototype.msg=function(t,n){if(this.__msgs||(this.__msgs={}),s.string(t)&&n)this.__msgs[t]=n;else if(s.object(t))if(Object.assign)Object.assign(this.__msgs,t);else for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(this.__msgs[e]=t[e]);return this},t}(),A=function(t){s.hasOwnProperty(t)&&(1===s[t].length?l[t]={get:function(){return this.__types.push(t),this}}:l[t]={value:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return this.__types.push([t,n]),this}})};for(var m in s)A(m);Object.defineProperties(g.prototype,l);var y={get string(){return(new g).string},get number(){return(new g).number},get object(){return(new g).object},get array(){return(new g).array},get boolean(){return(new g).boolean},get any(){return new g},printout:!1,singleMode:!1};function $(t,n){try{if(!n||0===n.length)return t;var e=n[0],r=(+e).toString()===e?+e:e;return("number"==typeof r&&Array.isArray(t)||t.hasOwnProperty(r))&&1===n.length?t[r]:$(t[r],n.slice(1))}catch(t){return}}function F(n,e,r){if("string"==typeof n&&(n=n.trim()),n||-1!==e.__types.indexOf("required")){for(var a=s,u=e.__names,i=[],o=[],d=[],c=[],f=[],l=[d,c,f,r,e.__handler],g=function(t,n){return f.push(function(t,n,e,r){n=n||"";var a=e||p;return t=t.replace(/%a/g,n),/\%t/.test(t)&&(t=t.replace(/%t/g,(function(){var t=a.length>0?a.shift():"";return t||""}))),r&&r.length>0&&/\%\d+/.test(t)&&r.forEach((function(n,e){return t=t.replace(new RegExp("%"+e,"g"),n)})),t}(function(t,n){return n&&n[t]?n[t]:h[t]?h[t]:h.default}(t,e.__msgs),u[0],u[1],n))},A=function(t){return[n].concat(t).map((function(t){return s.string(t)||s.number(t)?String(t):""}))},m=0,$=e.__types.length;m<$;m++){var F=e.__types[m];if("string"==typeof F)if(!1===a[F](n)){if(d.push(F),g(F,A()),y.singleMode)break}else c.push(F);else if(Array.isArray(F))if(!1===a[F[0]].apply(a,t([n],F[1]))){if(d.push(F[0]),g(F[0],A(F[1])),y.singleMode)break}else c.push(F[0])}for(m=0,$=e.__customs.length;m<$;m++){var _=e.__customs[m],v=_[2]||[];if(0===_[0])if(!1===_[1].apply(_,t([n],v))){if(d.push(m),g(String(m),A(v)),y.singleMode)break}else c.push(m);else 1===_[0]&&(i.push(_[1].apply(_,t([n],v))),o.push([m,v]))}return e.isAsync?new Promise((function(t,n){Promise.all(i).then((function(n){n.forEach((function(t,n){if(!1===t){var e=o[n][0];d.push(e),g(String(e),A(o[n][1]))}else c.push(n)})),t(l)})).catch((function(t){n(t)}))})):l}}function _(t){if(!t)return!0;var n,e,r,a,u=t[0],i=t[1],o=t[2],d=t[3],s=t[4];if(u.length>0){var c=function(){var t={keys:u};return o.length>0&&(t.msgs=o),d&&d.length>0&&(t.path=d),t};return s&&s[0]&&s[0](c()),y.printout&&(n=c(),r=(e=n).path?e.path.join(".")+": \n":"",a=e.msgs?e.msgs.map((function(t,n){return(e.keys?e.keys[n].toString():"")+" ✗ "+t})):[],console.warn("[31m"+r+"[36m"+a.join("\n"))),!1}if(s&&s[1]){var f={keys:i};d&&d.length>0&&(f.path=d),s[1](f)}return!0}function v(t,n,e){if("object"!=typeof t&&!(n instanceof g))throw new Error("Invalid arguments");var r=[],a=[],u=function(){return r.length>0&&-1===r.indexOf(!1)};if(n instanceof g){var i=F(t,n);n.isAsync?a.push(i):r.push(_(i))}else{if("object"!=typeof t||"object"!=typeof n)throw new Error("Invalid arguments");var o=[];!function t(n,e,r){if(Array.isArray(n)&&n.length>0)n.forEach((function(n,a){var u=e.concat();u.push(a),n instanceof g?r(u,n):"object"==typeof n&&t(n,u,r)}));else for(var a in n)if(n.hasOwnProperty(a)){var u=n[a],i=e.concat();i.push(a),u instanceof g?r(i,u):"object"==typeof u&&t(u,i,r)}}(n,[],(function(t,n){o.push([n,t])})),o.forEach((function(n){var u=n[0],i=n[1],o=$(t,i),d=e?e.concat(i):i,s=F(o,u,d);u.isAsync?a.push(s):r.push(_(s)),u.__substruct&&v(o,u.__substruct,d)}))}return a.length>0?new Promise((function(t,n){Promise.all(a).then((function(n){n.forEach((function(t){r.push(_(t))})),t(u())})).catch((function(t){n(t)}))})):u()}var b=y;b.validate=function(t,n){return v(t,n)},b.get=function(t,n){return $(t,s.string(n)?n.split("."):n)};export default b;export{g as Chain};
//# sourceMappingURL=validator.js.map
