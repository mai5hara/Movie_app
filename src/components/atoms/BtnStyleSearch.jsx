/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const BtnStyle = ({ btnText, btnFunc, btnCount, btnType, submit, id, btnStyle }) => {

  return (

    <button type={btnType} id={id} onClick={btnFunc} disabled={submit} >
      {/* <FontAwesomeIcon icon={faSearch} /> */}
    </button>
  )
}

export default BtnStyle;