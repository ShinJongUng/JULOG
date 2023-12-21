import db from '@/lib/firebase'

// POST 요청 처리
export async function POST(req, res) {
  const slug = req.url.split('views/')[1]
  const ref = db.ref('views').child(slug)
  const { snapshot } = await ref.transaction((currentViews) => {
    return currentViews === null ? 1 : currentViews + 1
  })

  return Response.json({ total: snapshot.val() })
}

// GET 요청 처리
export async function GET(req, res) {
  const slug = req.url.split('views/')[1]
  const snapshot = await db.ref('views').child(slug).once('value')
  const views = snapshot.val()

  return Response.json({ total: views })
}
