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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderDto) {
        const existingOrder = await this.prisma.order.findFirst({
            where: {
                table: createOrderDto.table,
            },
        });
        if (existingOrder) {
            throw new common_1.ConflictException('Já existe uma order para esta mesa.');
        }
        else {
            return this.prisma.order.create({ data: createOrderDto });
        }
    }
    async findAll() {
        try {
            const orders = await this.prisma.order.findMany({
                select: {
                    id: true,
                    table: true,
                    status: true,
                    name: true,
                    draft: true,
                },
            });
            return orders;
        }
        catch (error) {
            console.error('Erro ao buscar as order:', error);
            throw new Error('Ocorreu um erro ao buscar as order.');
        }
    }
    async findOne(id) {
        const order = this.prisma.order.findUnique({
            where: { id },
            select: {
                id: true,
                table: true,
                status: true,
                draft: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order não encontrada.');
        }
        return order;
    }
    async update(id, updateOrderDto) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            select: {
                table: true,
                status: true,
                draft: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order não encontrada.');
        }
        try {
            return await this.prisma.order.update({
                where: { id },
                data: { ...updateOrderDto, table: undefined },
            });
        }
        catch (error) {
            console.error('Erro ao atualizar order:', error);
            throw new Error('Ocorreu um erro ao atualizar o pedido.');
        }
    }
    async remove(id) {
        const order = await this.prisma.order.findUnique({ where: { id } });
        if (!order) {
            throw new common_1.NotFoundException('Order não encontrada.');
        }
        return await this.prisma.order.delete({ where: { id } });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map