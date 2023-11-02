// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import {  } from '../../apis/chairs.ts'

// export function useTodo() {
//   const queryClient = useQueryClient()

//   const deleteTodoMutation = useMutation(deleteTodo, {
//     onSuccess: async () => {
//       queryClient.invalidateQueries(['chairs'])
//     },
//   })

//   const updateTodoMutation = useMutation(updateTodo, {
//     onSuccess: async () => {
//       queryClient.invalidateQueries(['chairs'])
//     },
//   })

//   const addTodoMutation = useMutation(addTodo, {
//     onSuccess: async () => {
//       queryClient.invalidateQueries(['chairs'])
//     },
//   })

//   return {
//     deleteTodoMutation,
//     updateTodoMutation,
//     addTodoMutation,
//   }
// }
