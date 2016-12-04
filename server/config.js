exports.DATABASE_URL  =	process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        (process.env.NODE_ENV === "production" ?
                          "mongodb://user:pass@machine.mlab.com:port/repo-name" :
                          "mongodb://localhost/");

exports.PORT = process.env.PORT || 8080;

