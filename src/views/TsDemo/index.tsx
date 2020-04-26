import React from 'react'
import { useLocation } from 'react-router-dom'
import arrGeneric from '@/assets/arrGeneric.png'

/* 枚举 */
enum Direction {
  up = 1,
  down,
  left,
  right
}

/* 三种运动方式 */
type MoveType = 'linear' | 'ease' | 'bounse'

const moveTo = (ease: MoveType, direction: Direction): void => {
  console.log(ease, direction)
}

moveTo('ease', Direction.left)

class Person {
  private name: string

  private age: number

  constructor ({ name, age }: drag.PersonProps) {
    this.name = name
    this.age = age
  }

  /**
   * getName
   */
  public getName (): string {
    return this.name
  }

  /**
   * getAge
   */
  public getAge (): number {
    return this.age
  }
}

const p1 = new Person({ name: 'alex', age: 20 })
console.log(p1.getAge())
console.log(p1.getName())

interface PersonProps {
  name: string,
  age: number
}

// 泛型
type WomanProps<T> = {
  sex?: 'male' | 'female'
  chest?: number,
  waist?: number,
  hip?: number,
  bsae: T
}

interface ManProps extends PersonProps {
  bodyFat?: string,
  height?: number
}

const lili: WomanProps<PersonProps> = {
  bsae: {
    name: 'lili',
    age: 20
  },
  sex: 'female',
  chest: 93,
  waist: 69,
  hip: 85
}

const kang: ManProps = {
  name: 'kang',
  age: 22,
  bodyFat: '18%',
  height: 178
}

console.log(lili, kang)

const TsDemo: React.FC = () => {
  const loaction = useLocation()
  console.log(loaction)

  return (
    <div>
      <img src={arrGeneric} alt='arrGeneric' />
      <pre>
        {
          `
          interface Array<T> {
            length: number,
            toString(): string,
            pop(): T | undefined,
            // 注意此处的含义
            push(...items: T[]): number,
            concat(...items: T[]): T[],
            join(separator?: string): string,
            reverse(): T[],
            shift(): T | undefined;
            slice(start?: number, end?: number): T[],
            sort(compareFn?: (a: T, b: T) => number): this,
            splice(start: number, deleteCount?: number): T[],
            // 注意此处的重载写法
            splice(start: number, deleteCount: number, ...items: T[]): T[],
            unshift(...items: T[]): number,
            indexOf(searchElement: T, fromIndex?: number): number,
            lastIndexOf(searchElement: T, fromIndex?: number): number,
            every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean,
            some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean,
            forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void,
            map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[],
            filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[],
            filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[],
            reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T,
            reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T,
            reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U,
            // reduceRight 略
            // 索引调用
            [n: number]: T,
          }
          `
        }
      </pre>
    </div>
  )
}

export default TsDemo
