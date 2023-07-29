import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import type { ProductInfoSimple } from '@/types'

const axiosInstance = axios.create()
const mockAdapter = new MockAdapter(axiosInstance)

const products: ProductInfoSimple[] = [
  {
    id: 0,
    img: {
      path: '',
      alt: '상품 사진1'
    },
    info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' },
    review: {
      rating: 4,
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci ut distinctio
                            iste repellendus nobis temporibus alias ea odio, sunt, ipsa rem numquam. Quo, ullam.
                            Eaque autem deserunt adipisci quis.`
    }
  },
  {
    id: 1,
    img: {
      path: '',
      alt: '상품 사진1'
    },
    info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' },
    review: {
      rating: 3
    }
  },
  {
    id: 2,
    img: {
      path: '',
      alt: '상품 사진1'
    },
    info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' }
  }
]

mockAdapter.onGet('/api/products').reply(200, products)

export default axiosInstance
