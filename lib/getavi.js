const url = require('url')

function normalizeUrl(urlString) {
  if (urlString.charAt(urlString.length - 1) === '/')
    urlString = urlString.substr(0, urlString.length - 1)
  return url.parse(urlString)
}

function getAvatarUrl(profileUrl) {
  if (!profileUrl) return null
  const parsedUrl = normalizeUrl(profileUrl)
  const domain = parsedUrl.hostname
  const username = parsedUrl.pathname

  if (domain.endsWith('facebook.com'))
    return `https://graph.facebook.com${username}/picture?type=large`
  if (domain.endsWith('github.com')) return `https://github.com${username}.png`
  if (domain.endsWith('twitter.com'))
    return `https://twitter.com${username}/profile_image?size=original`
}

module.exports = getAvatarUrl
