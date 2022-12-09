
 $(document).ready(function (){
        // // all your jquery code will be written here
        // console.log("We are using JQuery")
        // // $(selector).action()  -- Syntax of JQuery
        // $('button').click(function(){
        //     console.log('You clicked button')
        //     $(this).hide()
        // })
        // $('button').on({
        //     click:function(){
        //         console.log('you clicked submit button')
        //     },
        //     mouseleave:function(){
        //         console.log('mouse left')
        //     }
        // })
        // $('#ind').hide(3000, function(){
        //     console.log('hidden')
        // })
        // $('#ind').show(5000, function(){
        //     console.log('shown')
        // })
        $('#hide').click(function(){
            $('#ind').hide(3000)
        })
        $('#show').click(function(){
            $('#ind').show(3000)
        })

    })
    // there are three main type f selectors in jQuery

    // 1. Element selector - this is an example of element selector which performs action on the elements 
    // ex: <p>Hello there</p> $(p).click(function(){
    //     $('p').hide()
    // })

    // 2. Id selector - this is an example of id selector which performs action on id
    // ex: <p id='first'>hello world</p> $('#first').click()


    // 3. class selector - this is an example of class selector which performs action on class
    // ex: <p class='second'>Hii</p> $('.second').click()

    // mouse events
    // on method  - with on method we can write multiple events on a selector

// 
