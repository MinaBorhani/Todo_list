import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add Todo Item" />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p className="item-content">This is the item 1</p>
          <button className="update-item">Update</button>
          <button>Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">This is the item 2</p>
          <button className="update-item">Update</button>
          <button>Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">This is the item 3</p>
          <button className="update-item">Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
