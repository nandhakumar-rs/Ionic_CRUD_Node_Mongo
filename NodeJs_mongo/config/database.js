if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://nandhu:nandhu@ds135916.mlab.com:35916/vid' }
} else {
  module.exports = { mongoURI: 'mongodb://nandhu:nandhu@ds135916.mlab.com:35916/vid' }
}