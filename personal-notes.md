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
