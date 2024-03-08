import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class DocumentNotFoundError extends ApiError {
    constructor(message = 'Document not found', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.NOT_FOUND, {}, processCode, type)
    }
}
