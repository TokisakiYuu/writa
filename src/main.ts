import selfsigned from "selfsigned";

let arrts = [
  {name: "commonName", value: "YuuLog"},
  {name: "countryName", value: "China"},
  {name: "localityName", value: "SiChuan"},
  {name: "stateOrProvinceName", value: "ChengDu"},
  {name: "organizationName", value: "TokisakiYuu(personal)"},
  {name: "organizationalUnitName", value: "Mr."},
  {name: "emailAddress", value: "tokisakiyuu@qq.com"}
];
const perms:SelfsignedPerms = selfsigned.generate(arrts, {clientCertificate: true});

console.log(perms);


setTimeout(() => {
  console.log(123);
  
}, 99999);

// http2.createSecureServer({
//   allowHTTP1: true,
  
// })