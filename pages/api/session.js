import auth0 from '../../lib/auth0'

export default async function session(req, res) {
  try {
    const tokenCache = auth0(req).tokenCache(req, res)
    const { accessToken } = await tokenCache.getAccessToken()
    res.status(200).json({ accessToken })
  } catch (error) {
    console.error(error)
  }
}
