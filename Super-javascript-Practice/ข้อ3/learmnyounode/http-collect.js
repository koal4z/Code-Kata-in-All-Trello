const http = require("http");
const bl = require("bl");
http.get(process.argv[2], res => {
  res.setEncoding("utf-8");
  res.pipe(
    bl((err, data) => {
      if (!err) {
        data = data.toString();
        console.log(data.length);
        console.log(data);
      }
    })
  );
});
