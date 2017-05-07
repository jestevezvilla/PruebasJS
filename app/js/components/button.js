import '../../css/button.scss';

export default function Button(options) {

    const defaultValues = {text: 'Pulsa'};

    const opt = _.extend(defaultValues, options)
    
    return {

        beforeRender(){
            
        },

        render(){

            this.beforeRender();

            var el = document.createElement('button');
            el.innerHTML = opt.text;

            return el;
        }
    }

};







