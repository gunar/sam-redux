This repo tries to:

- Use Redux for a SAM architecture
- Keep allowing for time-travel (by using reducer to mutate the store a.k.a. state in Redux)
- Show how to use actions with time-outs

Problems
      // A new ticking routine will start on every action
      // I allow this to happen believe that this empty calls 'present()' are cheap
      // and this allows me not to have to keep track of the ticks
      // which would pollute the store/state and the Redux-history
      // Solution: Make tick-tack in reducers. Make Debugger/Time-Travel ignore this Actions.
