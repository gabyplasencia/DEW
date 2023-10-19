const btns = document.querySelectorAll('.btn');
const questions = document.querySelectorAll('.question');

    btns.forEach(btn => {
        

        btn.addEventListener('click', () => {
            var wrong = true;

            if (btn.classList.contains('correct') && btn.classList.contains('btn-true')) {
                const wrapper = btn.closest('.wrapper');

                if(!wrapper){
                    return;
                }

                const question = wrapper.querySelector('.question');
                if(question){
                    question.style.color = "rgb(19, 118, 40)";
                    wrong = false;
                }
                
            }else if (btn.classList.contains('correct') && btn.classList.contains('btn-false')) {
                const wrapper = btn.closest('.wrapper')
                if(!wrapper){
                    return;
                }
                const question = wrapper.querySelector('.question');
                if(question){
                    question.style.color = "rgb(118, 19, 19)";
                    wrong = false;
                }

            }else {               
                const btnWrapper = btn.closest('.btn-wrapper');
                if(wrong) {
                    btnWrapper.classList.add('wrong');
                }
            }
        })

    });
