const myTodos = [
  {
    id: 1,
    text: 'Take a Bath',
    completed: true,
  },
  {
    id: 2,
    text: 'Feed Cat',
    completed: false
  },
  {
    id: 3,
    text: 'Breakfast',
    completed:false
  }
]

const showTodoes = data => {
  for(let index=0; index<data.length; index++) {
    const todo = data[index]

    console.log(`[${todo.id}] ${todo.id} ${todo.text} ${todo.completed}`)
  }
}
showTodoes(myTodos);

//----------------------------------------------//

const todos = ['Take a Bath', 'Feed Cat', 'Breakfast', 'Play with my dog', 'Go to work']

// -----------------------------------------------------------------------------

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

// -----------------------------------------------------------------------------

const searchTodos = (data, textToSearch) => {
  let newTodos = []

  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItem = item.toLowerCase()
    const lowerCasedText = textToSearch.toLowerCase()

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}

// -----------------------------------------------------------------------------

showTodos(todos)

// -----------------------------------------------------------------------------

const textInput = prompt('What todo do you want to search?')
const foundTodos = searchTodos(todos, textInput)

showTodos(foundTodos)
