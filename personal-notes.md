# Vue.js Notes

## Week 1

- When we need to bind the attributes, we use ":attribute" syntax.
- standart Vue.js structure

```js
	data() {
  return {
  counter: 0,
  };
  },
  methods: {

},
computed: {

#### computed functions must return a value! => getCounterResult() return this.counter > 5 ? "Big" : "Small";

},
mounted(){

},
```

- v-if="condition is true" => if the condition is satisfied, this component shows up.
- v-else => if the condition is not satisfied, this component shows up.
- v-if removes the unsatisfied conditions' components from DOM.

- <li v-for="item in items" :key="item">{{ item }}</li> => for loop in vue.js

##### class binding

```js
data() {
return {
showBorder: false,
redBg: true,
greenBg: false,
blueBg: false,
bgColor: "cyan",
border: "3px solid orangered",
};
},
computed: {
boxClasses() {
return {
border: this.showBorder,
red: this.redBg,
green: this.greenBg,
blue: this.blueBg,
};
},
},
```

##### style binding

```html
<div
  class="box"
  :class="boxClasses"
  :style="[{backgroundColor: bgColor}, {border: border}]"
></div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  computed: {
    counterBoxClasses() {
      return {
        "bg-success text-white": this.counter > 0,
        "bg-danger text-white": this.counter < 0,
        "bg-warning": this.counter == 0,
      };
    },
  },
});
```

- v-show="condition is true" => if the condition is satisfied, this component will be displayed. Different from v-if, v-show hides the other parts with display: none;

## Week 2

- props => It transfers the data or the functions from parent to child.

```js
props:{
	itemList: {
		type: Object,
		required: true,
		default: [],
	},
  addTodo: {
    type: Function,
    required: true,
  }
},
```

- custom events => It transfers the event from child to parent
  @click = "deleteTodo"

```js
methods: {
	deleteTodo() {
		this.$emit('delete-todo-item', this.todoItem);
	},
},
this.$emit(`${CustomEventName}`, data)
```

- provide & inject => they are the better versions of props and emits.

```js
provide(){
  myObj: {
    type: Object,
    required: true,
  },
  delete: {
    type: Function,
    required: true,
  },
},
inject: {
  delete: {
    type: Function,
    required: true,
  }
}
```

#### But using provide & inject can be complicated some complex projects. So that we need to use one of the state management tools such as vuex.

- State => variables used in components

- getters => returns a value, used as a variable. gets the data from state
- mutations => provide a chance to change the data in state. it works synchronously
- commit => triggers the mutations.
- mutations => commit

```js
addNewItem(){
  this.$store.commit("newItem", {
    id: new Date().getTime(),
    title: `Raf => ${new Date().getTime()}`,
    type: "mobilya",
  });
}
```

- actions => they work asynchronously.
- context => It contains everything which Vuex has. It is an instance of Vuex
- actions => dispatch
- dispatch => triggers the actions.

### Composition API

- setup(){} runs before beforeCreated(){}, it dominates the data before its' creation.

-Instead of beforeCreate() created() and data() we can use setup()

-color #c6161d
#gokhan@gkandemir.com
