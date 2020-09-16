import { writeMessage } from './SerialPort'
import SerialPort from 'serialport'

jest.mock('serialport')

describe('test protocol commands', () => {
  beforeAll(() => {
    const mock = jest.spyOn(SerialPort.prototype, 'write');
    mock.mockImplementation(() => {
      throw new Error('test error')
    });
  })

  it('should throw an error when calling writeMessage', () => {
    expect(() => writeMessage()).toThrow()
  })
})