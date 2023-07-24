module.exports.home = async (req, res) => {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    return res.render("home", {
      title: "Placement Cell",
    });
  };