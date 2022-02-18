import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const classes={
    switch:'flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary',
    span:'pointer-events-none absolute bg-white w-full h-full rounded-md',
  }
function Toggle() {
    const [enabled, setEnabled] = useState(false)
    const [changePage, setChangePage] = useState(0)
    const listenClick = () => setChangePage(changePage + 1);
    console.log('click', changePage)

  return (
    
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={listenClick}
      className={classes.switch}
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={classes.span} />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'bg-secondary' : 'bg-gray-200',
          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
        )}
      />
    </Switch>

  )
}

export default Toggle