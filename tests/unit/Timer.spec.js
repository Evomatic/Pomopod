import { expect } from 'chai'
import Timer from '@/components/Timer.vue'
import { shallowMount } from '@vue/test-utils'

//const wrapper = shallowMount(Timer);
let wrapper;

describe('Timer.vue', () => {
  beforeEach(()=>{
    wrapper = shallowMount(Timer);
  })
  it('It should exist', () => {
    expect(wrapper).to.exist;
    
   
    })
    
  });

