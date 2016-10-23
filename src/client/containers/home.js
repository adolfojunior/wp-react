import React from 'react'
import { increase, decrease } from '../actions'
import { connect } from 'react-redux'

function Home({ number, increase, decrease }) {
  return (
    <div>
      <div>
        Some state changes:
        <span>
          {number}
        </span>
      </div>
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

export default connect(({ count }) => count, { increase, decrease })(Home)
