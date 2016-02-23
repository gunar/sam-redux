# SAM-Redux [(Live version)](http://gunar.github.io/sam-redux)

This repo is an attempt to **use Redux for SAM architecture** while **keeping time-travel possible**.
On the side, it introduces a way to handle actions with [timeouts](http://www.stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout).

Also, it uses a very simple React component for the View.

## Purpose

This repo intends to extend the discussion about SAM happening in [Gitter](https://gitter.im/jdubray/sam-architecture).

## Building

Clone the repo and run `npm run watch` to live edit the source or `npm run build` to build into `/dist`.

## How it works

TODO

## SAM

SAM is State-Action-Model. It's a software architecture propsed by Jean-Jacques Dubray in his (in)famous article [Why I no longer use MVC Frameworks](http://www.ebpml.org/blog15/2015/12/why-i-no-longer-use-mvc-frameworks/) / [Part 2](http://www.ebpml.org/blog15/2015/12/why-i-no-longer-use-mvc-frameworks-part-2/) and [Introducing the SAM pattern as an alternative to MVC](http://www.ebpml.org/blog15/2016/01/introducing-the-sam-pattern-as-an-alternative-to-mvc/).

Dubray states that SAM is based on TLA+ concepts pioneered by Dr. Lamport.

## Issues

### Ticking

Ticking is used for all timeouts (message displaying, countdown timer).
A new ticking routine is started on every action. I allow this to happen believing that this empty calls 'present()' are cheap.
This allows me not to have to keep track of the ticks which would pollute the store/state and the Redux-history.
I believe a better solution would be to make a switching flag in the reducers (TICK, TICKING, TACK) and have Debugger/Time-Travel ignore this Actions.
