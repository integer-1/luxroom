import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCart, updateCart, deleteCart } from '../../apis/cart'

export function useCart() {
  const queryClient = useQueryClient()

  const addCartMutation = useMutation({
    mutationFn: addCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  const updateCartMutation = useMutation({
    mutationFn: updateCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  const deleteCartMutation = useMutation({
    mutationFn: deleteCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
  return {
    addCartMutation,
    updateCartMutation,
    deleteCartMutation,
  }
}
