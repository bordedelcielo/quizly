module.exports = async (req, res) => {
    res.cookie('jwtToken', '', { maxAge: 900000, httpOnly: true });
    res.redirect('/auth/login')
}