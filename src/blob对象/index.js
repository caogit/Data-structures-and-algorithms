/*
 * @Description: πε¨θΏιεδ½ ηζθΏ°
 * @Autor: ζΉθζΏ
 * @Date: 2022-03-31 09:47:52
 * @LastEditTime: 2022-03-31 11:25:38
 */

const str = '<div>εε</div>'

const blob = new Blob([str],{
    type:'text/html'
})

input.onchange=(e)=>{
    const file =  e.target.files[0]
    const img = new Image()
    const srcImg = URL.createObjectURL(file)
    console.log("π€‘ ~~ srcImg", srcImg)
    img.src = srcImg
    document.body.appendChild(img)
  }

input.onchange=(e)=>{
  const file =  e.target.files[0]

  const img = new Image()
  const fileReader = new FileReader()

  fileReader.readAsDataURL(file)

  fileReader.onload=  function(){
     const src =  fileReader.result
     img.src = src
  }
  document.body.appendChild(img)
}