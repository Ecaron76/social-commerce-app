import '../pagecontainer/pagecontainer.css'

export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <div className='pagecontainer'>
        {children}
      </div>
    )
  }