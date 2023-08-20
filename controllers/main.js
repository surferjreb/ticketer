

const _getHomeView = (req, res) => {
    res.render( 'index', { title: 'Ticketer'} );
}


module.exports.getHomeView = _getHomeView;