import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCart, updateCart, deleteCart } from '../../apis/cart'

export function useCart() {
  const queryClient = useQueryClient()

  const addCartMutation = useMutation(addCart, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cart'])
    },
  })
  const updateCartMutation = useMutation(updateCart, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cart'])
    },
  })

  const deleteCartMutation = useMutation(deleteCart, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cart'])
    },
  })
  return {
    addCartMutation,
    updateCartMutation,
    deleteCartMutation,
  }
}
