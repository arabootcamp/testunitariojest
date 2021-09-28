import {mount} from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('paso del titulo como props', () => {
    const titulo = 'paso del titulo como props';
    const wrapper = mount(Header, {
      propsData: {
        titulo
      }
    })
    const li00 = wrapper.findAll('li').at(0);
    expect(li00.text()).toEqual(titulo);
  })

  it('paso del titulo y color como props', () => {
    const titulo = 'paso del titulo como props';
    const color= 'paso del color como props';
    const wrapper = mount(Header, {
      propsData: {
        titulo,
        color
      }
    })
    const li00 = wrapper.findAll('li').at(0);
    const li01 = wrapper.findAll('li').at(1);
    expect({titulo:li00.text(),color:li01.text()}).toEqual({titulo,color});
  })
})