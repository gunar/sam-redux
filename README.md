# SAM-Redux [(Live version)](http://gunar.github.io/sam-redux)

This repo is an attempt to **use Redux for SAM architecture** while **keeping time-travel possible**.
On the side, it introduces a way to handle actions with [timeouts](http://www.stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout).

Also, it uses a very simple React component for the View.

## Purpose

This repo intends to extend the discussion about SAM happening in [Gitter](https://gitter.im/jdubray/sam-architecture).

## Building

Clone the repo and run `npm run watch` to live edit the source or `npm run build` to build into `/dist`.

## How it works

### Actions

The View `present()`s values to the Model, which decides whether to accept them.
Accepting means mutating the store with the received value.
Redux is used for this mutation, allowing for Time-travel and Hot Reloading of the reducers.

### nap (Next Action Predicate)

Runs after the Model has mutated (or not) and may dispatch automatic actions based on the State.

E.g. `if (countingDown) { decreaseCounter() }` (pseudocode)

## State

In SAM, the [State is a pure function of the Model](./src/state.js) (i.e. Store), and like React the View is a pure function of the State
(that's why there is no V in SAM: State -> View).

## SAM

SAM is State-Action-Model. It's a software architecture propsed by Jean-Jacques Dubray in his (in)famous article [Why I no longer use MVC Frameworks](http://www.ebpml.org/blog15/2015/12/why-i-no-longer-use-mvc-frameworks/) / [Part 2](http://www.ebpml.org/blog15/2015/12/why-i-no-longer-use-mvc-frameworks-part-2/) and [Introducing the SAM pattern as an alternative to MVC](http://www.ebpml.org/blog15/2016/01/introducing-the-sam-pattern-as-an-alternative-to-mvc/).

Dubray states that SAM is based on TLA+ concepts pioneered by Dr. Lamport.
