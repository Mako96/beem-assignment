exports.search = function (req, res) {
  mcc = parseInt(req.query.mcc);
  mnc = parseInt(req.query.mnc);
  ans = null;
  var fs = require('fs');
  data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  if (mcc && mnc) {
    data.forEach((item) => {
      if (item.mcc == mcc && item.mnc == mnc) {
        ans = item;
      }
    });
    if (ans) {
      res.statusCode = 200;
      res.json({
        message: "Search Successful",
        ans: ans,
      });
    } else {
      res.statusCode = 404;
      res.json({
        message: "Search Unsuccessful! No matching records",
      });
    }
  } else {
    res.statusCode = 404;
    res.json({
      message: "Search Unsuccessful! No matching records",
    });
  }
};
