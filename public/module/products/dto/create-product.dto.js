"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "name" não pode estar vazio' }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'O campo "name" deve ter entre 1 e 255 caracteres',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "price" não pode estar vazio' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "description" não pode estar vazio' }),
    (0, class_validator_1.Length)(1, 1000, {
        message: 'O campo "description" deve ter entre 1 e 1000 caracteres',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "banner" não pode estar vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo "banner" deve ser uma string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "banner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "category_id" não pode estar vazio' }),
    (0, class_validator_1.IsUUID)('4', { message: 'O campo "category_id" deve ser um UUID válido' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category_id", void 0);
//# sourceMappingURL=create-product.dto.js.map