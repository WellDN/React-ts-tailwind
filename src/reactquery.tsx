import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
  import { getTodos, postTodo } from './rqtest-my-api' //react-query test

  type RqTest = {
    todo: string
    
}
    type TodoType = {
        id: number
        title: string
        todo: string     
}
  
  // Create a client
  const queryClient = new QueryClient()
  
  function Query() {
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    )
  }
  
  function Todos() {
    // Access the client
    const queryClient = useQueryClient()
  
    // Queries
    const query = useQuery(['todos'], getTodos)
  
    // Mutations
    const mutation = useMutation(postTodo, {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['todos'])
      },
    })
  
    return (
      <div>
        <ul>
          {query.data?.map((todo:TodoType) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
  
        <button
          onClick={() => {
            mutation.mutate({
              id: Date.now(),
              title: 'Do Laundry',
            })
          }}
        >
          Add Todo
        </button>
      </div>
    )
  }