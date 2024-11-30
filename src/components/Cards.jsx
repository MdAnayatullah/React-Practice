import React from 'react'

function Cards(props) {
  return (
    <div>
      
      
     <div className="flex flex-col rounded-xl bg-amber-700 mx-2 relative h-[400px] w-[300px]">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{props.name}Bored ape nft accidental</h1>
            <h1>{props.surname}Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
