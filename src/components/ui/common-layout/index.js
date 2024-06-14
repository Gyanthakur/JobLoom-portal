

function CommonLayout ({childern}){
    return <div className="mx-auto max-w-7xl p-6 lg:px-8 ">

        {/* header component */}
        Header
        {/* main component */}
        <main>{childern}</main>

    </div>
}

export default CommonLayout;