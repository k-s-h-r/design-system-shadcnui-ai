import React, { useState } from 'react'
import { addDays, format, setDate } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Calendar } from '~/components/ui/calendar'
import type { DateRange } from 'react-day-picker'
import { date } from 'zod'

const OrderDashboard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(
    'Jan 20, 2023 - Feb 09, 2023',
  )

  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen)

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate)
    setIsCalendarOpen(false)
  }
  const initialRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  }

  const [range, setRange] = useState<DateRange>(initialRange)

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/orders">Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Input type="search" placeholder="Search..." className="w-64" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="mb-6 grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-2">Create New Order</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Order</DialogTitle>
                    </DialogHeader>
                    {/* Add form fields for creating a new order */}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$1,329</p>
                <p className="text-sm text-green-500">+25% from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$5,329</p>
                <p className="text-sm text-green-500">+10% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-4">
            <CardContent className="p-0">
              <div className="grid justify-items-start gap-8 p-6">
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[280px] justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {range.from ? (
                          range.to ? (
                            <>
                              {format(range.from, 'LLL dd, y')} -{' '}
                              {format(range.to, 'LLL dd, y')}
                            </>
                          ) : (
                            format(range.from, 'LLL dd, y')
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={initialRange.from}
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Tabs defaultValue="week" className="w-full">
                  <div className="flex w-full justify-between space-x-2">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                      <TabsTrigger value="year">Year</TabsTrigger>
                    </TabsList>
                    <div className="flex gap-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Filter</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Filter option 1</DropdownMenuItem>
                          <DropdownMenuItem>Filter option 2</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="outline">Export</Button>
                    </div>
                  </div>

                  <TabsContent value="week">
                    <div className="px-4 pb-4">
                      <h2 className="mb-1 text-xl font-semibold">Orders</h2>
                      <p className="mb-4 text-sm text-gray-500">
                        Recent orders from your store.
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <div>Liam Johnson</div>
                              <div className="text-sm text-gray-500">
                                liam@example.com
                              </div>
                            </TableCell>
                            <TableCell>Sale</TableCell>
                            <TableCell>Fulfilled</TableCell>
                            <TableCell>2023-06-23</TableCell>
                            <TableCell>$250.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Olivia Smith</div>
                              <div className="text-sm text-gray-500">
                                olivia@example.com
                              </div>
                            </TableCell>
                            <TableCell>Refund</TableCell>
                            <TableCell>Declined</TableCell>
                            <TableCell>2023-06-24</TableCell>
                            <TableCell>$150.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Noah Williams</div>
                              <div className="text-sm text-gray-500">
                                noah@example.com
                              </div>
                            </TableCell>
                            <TableCell>Subscription</TableCell>
                            <TableCell>Fulfilled</TableCell>
                            <TableCell>2023-06-25</TableCell>
                            <TableCell>$350.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Emma Brown</div>
                              <div className="text-sm text-gray-500">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell>Sale</TableCell>
                            <TableCell>Fulfilled</TableCell>
                            <TableCell>2023-06-26</TableCell>
                            <TableCell>$450.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Liam Johnson</div>
                              <div className="text-sm text-gray-500">
                                liam@example.com
                              </div>
                            </TableCell>
                            <TableCell>Sale</TableCell>
                            <TableCell>Fulfilled</TableCell>
                            <TableCell>2023-06-23</TableCell>
                            <TableCell>$250.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Olivia Smith</div>
                              <div className="text-sm text-gray-500">
                                olivia@example.com
                              </div>
                            </TableCell>
                            <TableCell>Refund</TableCell>
                            <TableCell>Declined</TableCell>
                            <TableCell>2023-06-24</TableCell>
                            <TableCell>$150.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div>Emma Brown</div>
                              <div className="text-sm text-gray-500">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell>Sale</TableCell>
                            <TableCell>Fulfilled</TableCell>
                            <TableCell>2023-06-26</TableCell>
                            <TableCell>$450.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  <TabsContent value="month">Month</TabsContent>
                  <TabsContent value="year">Year</TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-auto">
          <CardHeader>
            <CardTitle>Order Oe31b70H</CardTitle>
            <p>Date: November 23, 2023</p>
          </CardHeader>
          <CardContent>{/* Add order details here */}</CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OrderDashboard
