import { rest } from 'msw'
import { mockAllToursData } from '../mockData/mockAllToursData'

export const handlers = [
  rest.get('https://dry-castle-66151.herokuapp.com/api/v1/tours', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        stats: 'successful',
        results: mockAllToursData.length,
        data: {
          mockAllToursData
        }
    })
    )
  }),
]
