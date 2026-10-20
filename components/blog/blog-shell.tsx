"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { EnquiryModal } from "@/components/tours/enquiry-modal";

export function BlogShell({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileCTA onOpenEnquiry={() => setModalOpen(true)} />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDestination="Custom Tour Inquiry (Blog)"
      />
    </div>
  );
}
